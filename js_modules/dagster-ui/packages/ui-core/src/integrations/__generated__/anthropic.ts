/**
 * THIS FILE IS GENERATED BY `yarn generate-integration-docs`.
 *
 * DO NOT EDIT MANUALLY.
 */

import {IntegrationFrontmatter} from '../types';
import anthropicLogo from './logos/anthropic.svg';

export const logo = anthropicLogo;

export const frontmatter: IntegrationFrontmatter = {
  id: 'anthropic',
  status: 'published',
  name: 'Anthropic',
  title: 'Dagster & Anthropic',
  excerpt: 'Integrate Anthropic calls into your Dagster pipelines, without breaking the bank.',
  partnerlink: 'https://docs.anthropic.com/en/api/getting-started',
  categories: ['Other'],
  enabledBy: [],
  enables: [],
  tags: ['dagster-supported'],
};

export const content =
  'The `dagster-anthropic` library allows you to easily interact with the Anthropic REST API using the Anthropic Python API to build AI steps into your Dagster pipelines. You can also log Anthropic API usage metadata in Dagster Insights, giving you detailed observability on API call credit consumption.\n\nWhen paired with Dagster assets, the resource automatically logs Anthropic usage metadata in asset metadata.\n\n### Installation\n\n```bash\npip install dagster dagster-anthropic\n```\n\n### Example\n\n<CodeExample path="docs_snippets/docs_snippets/integrations/anthropic.py" language="python" />\n\n### About Anthropic\n\nAnthropic is an AI research company focused on developing safe and ethical AI systems. Their flagship product, Claude, is a language model known for its strong capabilities in analysis, writing, and coding tasks while maintaining high standards of truthfulness and safety.';
