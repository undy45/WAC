import { newE2EPage } from '@stencil/core/testing';

describe('ee-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ee-ambulance-wl-app></ee-ambulance-wl-app>');

    const element = await page.find('ee-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
