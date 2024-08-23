import MdxLayout from '@/page/mdx/MdxLayout';
import { MdxPage } from '@/mdx/MdxPage';

export let JSLayout = (props: MdxPage) => {
  return <MdxLayout discussionNumber={2} mdx={props.mdx} />;
};
