import React from 'react'

export default function SeoCourses() {
  return (
    <div className="sr-only">
      <h1>Best Tuition & Computer Training Institute in Pilathara, Payyanur | Bcore Computers & Tuition</h1>
      
      <h2>Tuition Classes in Pilathara for Classes 5-12 CBSE & State Syllabus</h2>
      <p>Bcore Computers & Tuition is the leading tuition centre in Pilathara, Payyanur offering expert coaching for Classes 5 to 12 CBSE and State syllabus with personalized attention, weekly tests, and board exam preparation.</p>
      
      <h2>Computer Courses in Payyanur - PGDCA, DCA, MS Office, Tally, Photoshop</h2>
      <p>Bcore offers job-oriented computer courses in Payyanur including PGDCA, DCA, MS Office, Advanced Excel, Tally, Photoshop, Graphic Designing, C++, HTML, and Spoken English. Practical lab training with industry-relevant curriculum.</p>
      
      <h2>Computer Training Institute near Pilathara Bus Stand</h2>
      <p>Located at Bus Stand, Pilathara. Contact: 9447 082 101, Email: bcorece@gmail.com, Website: www.bcore.in</p>
      
      <h2>Courses Offered at Bcore Pilathara Payyanur</h2>
      <ul>
        <li>Tuition Classes 5-12 CBSE</li>
        <li>Tuition Classes 5-12 State Syllabus</li>
        <li>PGDCA - Post Graduate Diploma in Computer Application</li>
        <li>DCA - Diploma in Computer Application</li>
        <li>CTTC - Certificate in Teacher Training Course</li>
        <li>DCM - Diploma in Computer Multimedia</li>
        <li>MS Office</li>
        <li>Advanced Excel</li>
        <li>Tally</li>
        <li>Photoshop</li>
        <li>Illustrator</li>
        <li>CorelDRAW</li>
        <li>Flash</li>
        <li>Animation</li>
        <li>Graphic Designing</li>
        <li>C & C++ Programming</li>
        <li>HTML</li>
        <li>ISM Malayalam</li>
        <li>DTP - Desktop Publishing</li>
        <li>Spoken English</li>
        <li>Spoken Hindi</li>
        <li>Calligraphy</li>
        <li>Vacation Courses</li>
      </ul>
      
      {/* Schema Markup for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Bcore Computers & Tuition",
            "description": "Best tuition centre and computer training institute in Pilathara, Payyanur offering classes 5-12 CBSE, State syllabus, PGDCA, DCA, MS Office, Tally, Photoshop, Graphic Designing, and programming courses.",
            "url": "https://www.bcore.in",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Bus Stand",
              "addressLocality": "Pilathara",
              "addressRegion": "Payyanur",
              "addressCountry": "IN"
            },
            "telephone": "+919447082101",
            "email": "bcorece@gmail.com",
            "openingHours": "Mo-Sa 09:00-19:00",
            "areaServed": ["Pilathara", "Payyanur", "Kannur"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Courses",
              "itemListElement": [
                {"@type": "Course", "name": "Tuition Classes 5-12 CBSE"},
                {"@type": "Course", "name": "Tuition Classes 5-12 State Syllabus"},
                {"@type": "Course", "name": "PGDCA"},
                {"@type": "Course", "name": "DCA"},
                {"@type": "Course", "name": "CTTC"},
                {"@type": "Course", "name": "DCM"},
                {"@type": "Course", "name": "MS Office"},
                {"@type": "Course", "name": "Advanced Excel"},
                {"@type": "Course", "name": "Tally"},
                {"@type": "Course", "name": "Photoshop"},
                {"@type": "Course", "name": "Illustrator"},
                {"@type": "Course", "name": "CorelDRAW"},
                {"@type": "Course", "name": "Animation"},
                {"@type": "Course", "name": "Graphic Designing"},
                {"@type": "Course", "name": "C & C++"},
                {"@type": "Course", "name": "HTML"},
                {"@type": "Course", "name": "ISM Malayalam"},
                {"@type": "Course", "name": "DTP"},
                {"@type": "Course", "name": "Spoken English"},
                {"@type": "Course", "name": "Spoken Hindi"},
                {"@type": "Course", "name": "Calligraphy"}
              ]
            }
          })
        }}
      />
    </div>
  )
}