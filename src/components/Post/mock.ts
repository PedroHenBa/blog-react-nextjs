import { PostProps } from './index';
import content from '../HtmlContent/mock';
import data from '../ArticleHeader/mock';

export default {
  ...data,
  content: content,
} as PostProps;
