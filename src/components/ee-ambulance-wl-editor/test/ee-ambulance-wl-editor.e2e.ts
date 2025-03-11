import { newE2EPage } from '@stencil/core/testing';

describe('ee-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ee-ambulance-wl-editor></ee-ambulance-wl-editor>');

    const element = await page.find('ee-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
