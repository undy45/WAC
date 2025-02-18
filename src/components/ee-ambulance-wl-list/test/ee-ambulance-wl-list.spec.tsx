import { newSpecPage } from '@stencil/core/testing';
import { EeAmbulanceWlList } from '../ee-ambulance-wl-list';

describe('ee-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EeAmbulanceWlList],
      html: `<ee-ambulance-wl-list></ee-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <ee-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ee-ambulance-wl-list>
    `);
  });
});
