import { newSpecPage } from '@stencil/core/testing';
import { EeAmbulanceWlApp } from '../ee-ambulance-wl-app';

  describe('ee-ambulance-wl-app', () => {

    it('renders editor', async () => {
      const page = await newSpecPage({
        url: `http://localhost/entry/@new`,
        components: [EeAmbulanceWlApp],
          html: `<ee-ambulance-wl-app base-path="/"></ee-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("ee-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
        components: [EeAmbulanceWlApp],
          html: `<ee-ambulance-wl-app base-path="/ambulance-wl/"></ee-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("ee-ambulance-wl-list");
  });
});
