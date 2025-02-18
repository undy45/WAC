import { newSpecPage } from '@stencil/core/testing';
import { EeAmbulanceWlList } from '../ee-ambulance-wl-list';

describe('ee-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EeAmbulanceWlList],
      html: `<ee-ambulance-wl-list></ee-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as EeAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
