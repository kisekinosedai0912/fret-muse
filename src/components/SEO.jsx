import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, url, image }) => {
	return (
		<Helmet>
		<title>{title || 'FretMuse – Master the Guitar Fretboard'}</title>
		<meta name="description" content={description || 'Learn notes and scales with interactive tools and speech assistance. Build fretboard fluency and master solos.'} />
		<meta name="keywords" content="electric guitar, guitar fretboard notes, guitar note trainer, fretboard fluency, learn guitar scales, solo guitar practice, interactive guitar tool, single-page guitar app" />
		<meta name="author" content="Jasper Bendol" />
		
		{/* Open Graph */}
		<meta property="og:title" content={title || 'FretMuse – Master the Guitar Fretboard'} />
		<meta property="og:description" content={description || 'Learn notes and scales with interactive tools and speech assistance. Build fretboard fluency and master solos.'} />
		<meta property="og:url" content={url || 'https://fret-muse.vercel.app/'} />
		<meta property="og:image" content={image || 'https://fret-muse.vercel.app/images/fretmuse-og-image.jpg'} />
		<meta property="og:type" content="website" />

		{/* Twitter Card */}
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:title" content={title || 'FretMuse – Master the Guitar Fretboard'} />
		<meta name="twitter:description" content={description || 'Learn notes and scales with interactive tools and speech assistance. Build fretboard fluency and master solos.'} />
		<meta name="twitter:image" content={image || 'https://fret-muse.vercel.app/images/fretmuse-og-image.jpg'} />
		</Helmet>
	);
};

export default SEO;