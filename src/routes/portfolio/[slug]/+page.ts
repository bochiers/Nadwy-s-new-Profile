import { error } from '@sveltejs/kit';
import { portfolio } from '$lib/data';

export const load = ({ params }) => {
  const item = portfolio.find((p) => p.slug === params.slug);
  if (!item) throw error(404, 'Not found');
  return { item };
};

