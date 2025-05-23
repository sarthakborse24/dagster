/**
 * THIS FILE IS GENERATED BY `yarn generate-integration-docs`.
 *
 * DO NOT EDIT MANUALLY.
 */

import {IntegrationFrontmatter} from '../types';
import microsoftTeamsLogo from './logos/microsoft_teams.svg';

export const logo = microsoftTeamsLogo;

export const frontmatter: IntegrationFrontmatter = {
  id: 'microsoftTeams',
  status: 'published',
  name: 'Microsoft Teams',
  title: 'Dagster & Microsoft Teams',
  excerpt: 'Keep your team up to speed with Teams messages.',
  partnerlink: 'https://www.microsoft.com/en-us/microsoft-teams/group-chat-software',
  categories: ['Alerting'],
  enabledBy: [],
  enables: [],
  tags: ['dagster-supported', 'alerting'],
};

export const content =
  'By configuring this resource, you can post messages to MS Teams from any Dagster op or asset.\n\n### Installation\n\n```bash\npip install dagster-msteams\n```\n\n### Example\n\n<CodeExample path="docs_snippets/docs_snippets/integrations/microsoft-teams.py" language="python" />\n\n### About Microsoft Teams\n\n**Microsoft Teams** is a business communication platform. Teams offers workspace chat and videoconferencing, file storage, and application integration.';
