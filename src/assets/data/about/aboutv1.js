import projectFrame from "../../images/Frame.svg"
import projectCardImage1 from "../../images/nft/01maru.png"
import projectCardImage2 from "../../images/logo.png"
import project1 from "../../images/bg/BG-project.png"
import project2 from "../../images/bg/BG-marketplace.png"
import project3 from "../../images/bg/BG-magicshoes.png"



 const data = {
    aboutDescription: '매직클럽 NFT 거래소와 매직슈즈 M2E 프로젝트는 커뮤니티 유저들에게 부와 명예를 안겨주는 매개체 역할을 해 줄 것이다. 그 부와 명예를 안겨 줄 4명의 도깨비들과 함께 NFT세상으로 떠날 준비가 된 당신은 행운의 주인공이 될 것이다.',
    aboutInfo: [
        {
            image: projectCardImage1,
            title: "NFT",
            text: "Magic Club NFT"
        },
        {
            frame: projectFrame,
            image: projectCardImage2,
            title: "MarketPlace",
            text: 'Magic Club',
            bgImage: project2
        },
        {
            mainTitle: "Coming Soon",
            title: "M2E",
            frame: null,
            text: 'Magic Shoes',
            bgImage: project3
        }
    ]
}

export default data;