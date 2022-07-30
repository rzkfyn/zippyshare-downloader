const load = document.createElement('div');
load.classList.add('mt-10', 'load');
load.innerHTML = '<h3 class="text-3xl text-neutral-200 font-semibold">Tunggu Sebentar <span class="dots"></span></h3>';

const successEl = document.createElement('div');
successEl.classList.add('mt-8', 'border', 'rounded-sm', 'px-3', 'py-4', 'border-green-400', 'success');
successEl.innerHTML = `<img src="/img/success.png" alt="success" class="mx-auto w-[60px]">
                      <div class="mt-3 w[250px]">
                        <p class="text-center text-sm text-neutral-200">File berhasil ditemukan dan akan otomatis mengunduh. Tidak mengunduh? <a href="" class="text-blue-200 hover:text-blue-400 transition ulang-btn">ulangi</a>. Atau <a href="/" class="text-blue-200 hover:text-blue-400">download file lain</a></p>
                      </div>`;

const failEl = document.createElement('div');
failEl.classList.add('mt-8');
failEl.innerHTML = `<div class="border border-red-800 rounded-md bg-red-500/10 p-3">
                      <p class="text-neutral-200">
                        Gagal Mendapatkan File ;_; | Pastikan url yang kamu berikan valid!
                        Merasa url yang kamu berikan valid dan ini merupakan kesalahan dari web? <a href="https://github.com/rzkfyn/zippyshare-downloader/issues/new" class="text-indigo-200 font-bold transition hover:text-indigo-400" target="_blank">Laporkan di sini</a>
                      </p>
                    </div>
                    <a href="/" class="text-center text-neutral-300 text-sm rounded py-1 mt-3 block sm:mx-auto w-fit sm:text-normal sm:w-fit sm:text-center underline md:text-xl">&laquo; Kembali ke halaman utama</a>`;

export {
  load,
  successEl,
  failEl
}
