
import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('call API and return data', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '123' }));
    return getData('https://cualquiera.com').then((response) => {
      expect(response.data).toEqual('123');

      expect(fetch.mock.calls[0][0]).toEqual('https://cualquiera.com');
    });
  });
});
