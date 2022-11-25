const Experiences = ({
  jobTitle = "",
  company = "",
  duration = "",
  desc = "",
}) => (
  <div>
    <p>jobTitle {jobTitle}</p>
    <p>company {company}</p>
    <p>duration {duration}</p>
    <p>description {desc}</p>
  </div>
)

export default Experiences
