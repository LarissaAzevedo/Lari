// import { Tabs } from "antd"
import { jobsInfos } from "./jobsInfos"
import { ExperiencesContent, StyledTabs } from "./styles"

const Experiences = () => {
  return (
    <ExperiencesContent>
      <StyledTabs
        defaultActiveKey="1"
        tabPosition="left"
        items={jobsInfos.map((jobInfo) => {
          return {
            label: `${jobInfo.company}`,
            key: jobInfo.company,
            children: `${jobInfo.desc}`,
          }
        })}
      />
    </ExperiencesContent>
  )
}

export default Experiences
