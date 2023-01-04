import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer';

test('Тестирование загрузки и преобразования ArrayBufferConverter', () => {
  const received = new ArrayBufferConverter();
  received.load(getBuffer());

  expect(received.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
