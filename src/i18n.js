import { createI18n } from 'vue-i18n'
import Achievement from './views/Achievement.vue'

const messages = {
  en: {
    navbar: {
      home: 'Home',
      about: 'About',
      achievement: 'Achievement',
      projects: 'Projects',
      experience: 'Experience',
    },
    home: {
        title: 'Hello Everyone!',
        subtitle: `I'm interested in becoming a Website Developer. making code simple and creating interactive and user friendly websites. Let's explore`,
        myPorto: 'My Portfolio!',
        getStarted: 'Get Started',
        love: 'Give me as much of your love as possible!',
    },
    about: {
      title: 'About Me',
      myName: 'I am Fauzan',
      myName2: `(some people called me Zan)`,
      myName: 'I am Fauzan',
      description: `
        A graduate of a state vocational high school in Indonesia majoring in software engineering. Please explore this website to your heart's content! I created this website to document the projects I created during my life as a website developer.
      `,
      myMedia:'My Sosial Media',
      myKnow: 'My Knowledge',
      myKnow2:'During my almost 3 year journey as a website developer, I have learned many things to help me make it easier to complete my projects. The various tools and frameworks that I learned include the following :',
      link: 'with these tools and frameworks I have received many awards as you can see here:'
    },
    Achievement: {
      title:'Achievement',
      description:'During my time as a website developer I have won several awards, including:',
      certif1:'Certification for National Occupational junior programmers officially from the Indonesian National Professional Certification Agency',
      certif2:'Internship certificate as a junior website developer at the Information Technology Services Center at Jakarta State University',
      certif3:'Award certificate as the best winner of the information technology innovation competition in the field of product creation at the Satuasa Student Award #3 event',
      link: 'I managed to get these awards from my previous valuable experiences which you can see here:'
    },
    experience: {
      title: 'Experience',
      description: `Below are some valuable experiences I have gained while living my life as a Website Developer`,
      exOne:'have the opportunity to take the official National Junior Occupational Programmer Certification exam from the Indonesian National Professional Certification Agency',
      exTwo:'had the opportunity to work as a frontend website developer for 4 months at Oqury Studio',
      exThree:`Got the opportunity to take part in the 'Student Skill Competition' in the field of web design at the North Jakarta level and won #3 in the competition`,
      exFour: `Carried out an internship for 4 months as a junior website developer at the Information Technology Service Center, Jakarta State University`,
      exFive: `took part in the team competition in the 'Satuasa Student Award #3' event in the field of technology and information. succeeded in achieving 3rd level general results in DKI Jakarta`,
      link:'Apart from the experience above, I also have some concrete evidence from the projects I have worked on while being a website developer. You can see it here :'
    },
    project: {
      title: 'Projects',
      description: 'Below are some of my real projects that are worthwhile',
      visit: 'Visit Website',
      detail: 'Detail',
      link1:'Interested in collaborating with me?',
      link2:'Click Here'
    },
  },
  id: {
    navbar: {
      home: 'Beranda',
      about: 'Tentang',
      projects: 'Proyek',
      achievement: 'Prestasi',
      experience: 'Pengalaman',
    },
    home: {
      title: 'Halo Semua!',
      subtitle: `Saya tertarik menjadi Pengembang Website, menyederhanakan kode dan menciptakan situs web interaktif dan ramah pengguna. Mari jelajahi`,
      myPorto: 'Portofolio Saya!',
      getStarted: 'Mulai',
      love: 'Berikan saya sebanyak mungkin cinta Anda!',
    },
    about: {
      title: 'Tentang Saya',
      myName: 'Saya adalah Fauzan',
      myName2: `(beberapa orang memanggil saya Zan)`,
      description: `
        Lulusan sekolah menengah kejuruan negeri di Indonesia jurusan rekayasa perangkat lunak. Silakan jelajahi situs web ini sebebas hati! Saya membuat situs web ini untuk mendokumentasikan proyek-proyek yang saya buat selama menjadi pengembang website.
      `,
      myMedia: 'Sosial Media Saya',
      myKnow: 'Pengetahuan Saya',
      myKnow2: 'Selama hampir 3 tahun perjalanan saya sebagai pengembang website, saya telah mempelajari banyak hal untuk membantu saya menyelesaikan proyek-proyek saya. Berbagai alat dan kerangka kerja yang saya pelajari antara lain:',
      link: 'Dengan alat dan kerangka kerja ini, saya telah menerima banyak penghargaan seperti yang dapat Anda lihat di sini:'
    },
    Achievement: {
      title: 'Prestasi',
      description: 'Selama menjadi pengembang website, saya telah meraih beberapa penghargaan, termasuk:',
      certif1: 'Sertifikasi Okupasi Programmer Junior Nasional secara resmi dari Badan Nasional Sertifikasi Profesi Indonesia',
      certif2: 'Sertifikat magang sebagai junior pengembang website di Pusat Layanan Teknologi Informasi Universitas Negeri Jakarta',
      certif3: 'Sertifikat penghargaan sebagai pemenang terbaik lomba inovasi teknologi informasi dalam bidang kreasi produk pada acara Satuasa Student Award #3',
      link: 'Saya berhasil mendapatkan penghargaan-penghargaan ini dari pengalaman berharga sebelumnya yang dapat Anda lihat di sini:'
    },
    experience: {
      title: 'Pengalaman',
      description: `Berikut adalah beberapa pengalaman berharga yang saya dapatkan selama menjadi Pengembang Website`,
      exOne: 'Mendapat kesempatan mengikuti ujian Sertifikasi Okupasi Programmer Junior Nasional resmi dari Badan Nasional Sertifikasi Profesi Indonesia',
      exTwo: 'Bekerja sebagai pengembang website frontend selama 4 bulan di Oqury Studio',
      exThree: `Mendapatkan kesempatan untuk mengikuti 'Lomba Keterampilan Siswa' di bidang desain web tingkat Jakarta Utara dan meraih peringkat ke-3 dalam kompetisi tersebut.`,
      exFour: 'Magang sebagai junior pengembang website selama 4 bulan di Pusat Layanan Teknologi Informasi, Universitas Negeri Jakarta',
      exFive: 'Berpartisipasi dalam kompetisi tim di acara "Satuasa Student Award #3" di bidang teknologi dan informasi, berhasil meraih hasil umum level 3 di DKI Jakarta',
      link: 'Selain pengalaman di atas, saya juga memiliki bukti konkret dari proyek-proyek yang pernah saya kerjakan sebagai pengembang website. Anda dapat melihatnya di sini:'
    },
    project: {
      title: 'Proyek',
      description: 'Berikut adalah beberapa proyek nyata saya yang patut diperhitungkan',
      visit: 'Kunjungi Website',
      detail: 'Detail',
      link1: 'Tertarik berkolaborasi dengan saya?',
      link2: 'Klik di sini'
    },
  },
}

const i18n = createI18n({
  locale: 'en', // default language
  fallbackLocale: 'en',
  messages
})

export default i18n
