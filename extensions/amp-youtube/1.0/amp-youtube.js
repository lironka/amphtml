/**
 * Copyright 2020 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {VideoBaseElement} from '../../amp-video/1.0/base-element';
import {Youtube} from './youtube';

/** @const {string} */
const TAG = 'amp-youtube';

class AmpYoutube extends VideoBaseElement {}

/** @override */
AmpYoutube['Component'] = Youtube;

/** @override */
AmpYoutube['props'] = {
  'autoplay': {attr: 'autoplay'},
  'loop': {attr: 'loop'},
  'videoid': {attr: 'data-videoid'},
  'liveChannelid': {attr: 'data-live-channelid'},
  'dock': {attr: 'dock'},
  'credentials': {attr: 'credentials'},
  'params': {attrPrefix: 'data-param-'},
};

/** @override */
AmpYoutube['layoutSizeDefined'] = true;

AMP.extension(TAG, '1.0', (AMP) => {
  AMP.registerElement(TAG, AmpYoutube);
});
