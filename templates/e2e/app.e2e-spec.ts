import { <%=classedName%>Page } from './app.po';

describe('<%= dashedName %> App', () => {
  let page: <%=classedName%>Page;

  beforeEach(() => {
    page = new <%=classedName%>Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
