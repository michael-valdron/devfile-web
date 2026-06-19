/**
 * Copyright Red Hat
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

const baseUrl = 'http://127.0.0.1:4200';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__dirname, {
      webServerCommands: {
        default: 'yarn nx run landing-page:serve:development',
        production: 'PORT=4200 HOSTNAME=127.0.0.1 yarn nx run landing-page:serve-standalone',
      },
      ciWebServerCommand: 'PORT=4200 HOSTNAME=127.0.0.1 yarn nx run landing-page:serve-standalone',
      ciBaseUrl: baseUrl,
      webServerConfig: {
        timeout: 120_000,
        reuseExistingServer: false,
      },
    }),
    baseUrl,
  },
});
