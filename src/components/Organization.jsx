function Organization() {
  return (
    <>
      <div>
        <h1 className="text-4xl my-4 text-center lg:text-left">Organization</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-60 justify-center items-center px-4">
        {/* Bagian Logo dan Deskripsi */}
        <div className="w-32 h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden relative mb-4 lg:mb-0">
          <img
            src="img/logo/himata.png"
            className="w-full h-full object-contain hover:text-primary" // Menggunakan object-contain
            alt="Organization"
          />

          {/* Deskripsi yang tampil pada mobile */}
          {/* <div className="mt-8 p-4 rounded-md shadow-md w-[320px] lg:w-[550px]">
            <div className="text-sm w-full">
              <span>
                I am responsible for creating and managing microblog content as
                well as developing kaleidoscope content to commemorate
                significant days posted on Instagram. Additionally, I serve as
                the Documentation Division in various seminar, webinar, and
                other organizational activities, while coordinating the media
                team to ensure smooth content production and communication
                within the organization.
              </span>
            </div>
          </div> */}
        </div>

        {/* Bagian Nama, Jabatan dan Tanggal */}
        <div className="text-center lg:text-left">
          <h1 className="text-md mb-2">
            Staff Departemen Pengembangan Minat dan Bakat
          </h1>
          <h1 className="text-2xl font-bold mb-2">
            HIMATA UNEJ (Himpunan Mahasiswa Tambang Universitas Jember)
          </h1>
          <span className="text-sm text-primary font-bold">
            Februari 2023 – Desember 2023
          </span>
        </div>
      </div>
    </>
  );
}

export default Organization;
