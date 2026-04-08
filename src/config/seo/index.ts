const images = [
  '/logo/gitbi-logo.png',
  '/logo.png',
];
const description =
  "GİTBİ (Girişimcilik ve Teknoloji Birliği), teknoloji ve girişimcilik dünyasını bir araya getiren, inovasyonu ve iş birliğini odağına alan dinamik bir topluluktur.";

const title = { default: 'GİTBİ | Girişimcilik ve Teknoloji Birliği', template: `%s | GİTBİ` };
const url = 'https://gitbi.org/'; // Placeholder or best guess
const metadataBase = new URL(url);

export const metaDataObject = {
  metadataBase: metadataBase,
  title: title,
  openGraph: {
    url: url,
    description: description,
    images: images,
  },
  description: description,
};

