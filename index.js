import DHT from 'bittorrent-dht';
import WebTorrent from 'webtorrent';

const client = new WebTorrent();

const dht = new DHT();
dht.listen(30000, () => console.log('DHT Listening'));
dht.on('ready', () => {
  console.log('DHT Ready')
  dht.lookup('08ada5a7a6183aae1e09d831df6748d566095a10', (err, numNodes) => {
    if (err) console.error(err);
    else console.log(`[BOOTSTRAP] Found ${numNodes} nodes`);
  });
});
dht.on('warning', err => console.warn('DHT Warning:', err.message));
dht.on('error', err => console.error('DHT Error:', err));
dht.on('announce', infohash => client.add(infohash.toString('hex')));
