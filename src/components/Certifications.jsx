import './Certifications.css'

function Certifications() {
  return (
    <section id="certifications">
      <h2>Certifications</h2>

      <div className="certificate-container">

        <div className="certificate-card">
          <h3>Ediglobe – Web Development</h3>

          <p>Course Completion Certificate</p>
          <a
            href="/Certificates/course%20complete%20certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate
          </a>
        </div>

        <div className="certificate-card">
          <h3>Ediglobe – Web Development</h3>

          <p>Internship Completion Certificate</p>
          <a
            href="/Certificates/internship%20complete%20certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate
          </a>
        </div>

        <div className="certificate-card">
          <h3>NPTEL – Data Mining</h3>

          <a
            href="/Certificates/nptel%20certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate
          </a>
        </div>

        <div className="certificate-card">
          <h3>Ediglobe – Web Development</h3>

          <p>Project Completion Certificate</p>
          <a
            href="/Certificates/project%20complete%20certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate
          </a>
        </div>

        <div className="certificate-card">
          <h3>Thiranex – Data Analytics</h3>

          <a
            href="/Certificates/thiranex%20certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate
          </a>
        </div>

      </div>
    </section>
  )
}

export default Certifications