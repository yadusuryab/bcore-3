import React from 'react'

function SeoAbout() {
  return (
    <div className="sr-only">
      <h1>Bcore Computers & Tuition - Best Tuition Centre in Pilathara, Payyanur</h1>
      
      <h2>Tuition Classes for Classes 5 to 12 CBSE & State Syllabus in Pilathara</h2>
      <p>Bcore Computers & Tuition is the leading tuition centre in Pilathara, Payyanur offering expert coaching for Classes 5 to 12 CBSE and State syllabus with small batch sizes, individual attention, and weekly tests.</p>
      
      <h2>Computer Courses in Payyanur - PGDCA, DCA, MS Office, Tally, Photoshop, Animation</h2>
      <p>Bcore offers job-oriented computer courses in Payyanur including PGDCA, DCA, MS Office, Tally, Photoshop, Graphic Designing, Animation, C++, HTML, and Spoken English with lab-based practical training.</p>
      
      <h2>Computer Training Institute at Bus Stand, Pilathara Near Payyanur</h2>
      <p>Located at Bus Stand, Pilathara. Bcore is the most trusted computer training and tuition institute in Payyanur with affordable fees and experienced faculty.</p>
      
      <h2>Admissions Open 2024 at Bcore Pilathara Payyanur</h2>
      <p>Admissions open for 2024. Contact us at 9447 082 101 or visit www.bcore.in. Join the best tuition centre and computer institute in Pilathara, Payyanur today.</p>
      
      <h2>Courses Offered at Bcore Pilathara Payyanur</h2>
      <ul>
        <li>Tuition Classes 5 to 12 CBSE</li>
        <li>Tuition Classes 5 to 12 State Syllabus</li>
        <li>PGDCA - Post Graduate Diploma in Computer Application</li>
        <li>DCA - Diploma in Computer Application</li>
        <li>MS Office</li>
        <li>Tally</li>
        <li>Photoshop</li>
        <li>Graphic Designing</li>
        <li>Animation</li>
        <li>C & C++ Programming</li>
        <li>HTML</li>
        <li>Spoken English</li>
        <li>Advanced Excel</li>
        <li>Illustrator</li>
        <li>CorelDRAW</li>
        <li>DTP</li>
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
            "description": "Best tuition centre and computer training institute in Pilathara, Payyanur offering classes 5 to 12 CBSE, State syllabus, PGDCA, DCA, MS Office, Tally, Photoshop, Animation, and programming courses.",
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
            "areaServed": ["Pilathara", "Payyanur", "Kannur", "Kasaragod"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Educational Programs",
              "itemListElement": [
                {"@type": "Course", "name": "Tuition Classes 5 to 12 CBSE"},
                {"@type": "Course", "name": "Tuition Classes 5 to 12 State Syllabus"},
                {"@type": "Course", "name": "PGDCA"},
                {"@type": "Course", "name": "DCA"},
                {"@type": "Course", "name": "MS Office"},
                {"@type": "Course", "name": "Advanced Excel"},
                {"@type": "Course", "name": "Tally"},
                {"@type": "Course", "name": "Photoshop"},
                {"@type": "Course", "name": "Graphic Designing"},
                {"@type": "Course", "name": "Animation"},
                {"@type": "Course", "name": "C & C++"},
                {"@type": "Course", "name": "HTML"},
                {"@type": "Course", "name": "Spoken English"},
                {"@type": "Course", "name": "Illustrator"},
                {"@type": "Course", "name": "CorelDRAW"},
                {"@type": "Course", "name": "DTP"},
                {"@type": "Course", "name": "Calligraphy"},
                {"@type": "Course", "name": "Vacation Courses"}
              ]
            }
          })
        }}
      />
    </div>
  )
}

export default SeoAbout