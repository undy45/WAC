import { newE2EPage } from '@stencil/core/testing';

describe('ee-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ee-ambulance-wl-list></ee-ambulance-wl-list>');

    const element = await page.find('ee-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
