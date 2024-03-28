import Image, { StyledImageProps } from "@/components/Image/Image";
import styled from "styled-components";

const StyledContactList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledContactListItem = styled.li`
  padding: 0.5rem;
`;

const ContactList = ({
  images,
}: {
  images: StyledImageProps[];
}): JSX.Element => (
  <StyledContactList>
    {images.map((image, src) => (
      <StyledContactListItem key={src}>
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
          variant={image.variant}
          priority={image.priority}
        />
      </StyledContactListItem>
    ))}
  </StyledContactList>
);

export default ContactList;
