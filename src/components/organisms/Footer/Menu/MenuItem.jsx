import LinkWithUnderline from "../../../atoms/LinkWithUnderline"

const MenuItem = ({ title = '' }) => {
    return (
        <LinkWithUnderline
            title={title}
            color="gray.200"
            hoverColor="white"
            underlineColor="white"
        />
    )
}

export default MenuItem