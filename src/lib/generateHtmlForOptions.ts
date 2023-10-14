import { OptionWithHTML, Option } from '@/models/Question';
import { remark } from 'remark';
import html from 'remark-html';

export default async function generateHtmlForOptions(
  options: Option[]
): Promise<OptionWithHTML[]> {
  const optionWithHtmlPromises = options.map(async (option) => {
    const processedContent = await remark().use(html).process(option.text);
    const contentHtml = processedContent.toString();
    return { ...option, html: contentHtml };
  });

  return Promise.all(optionWithHtmlPromises);
}
