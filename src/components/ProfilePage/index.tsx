import React from 'react';

import Feed from '../Feed'

import {
    Container,
    Banner,
    Avatar,
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage,
    EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>
                <ProfileData>
                    <EditButton outlined>Editar Perfil</EditButton>

                    <h1>Michel Stefani</h1>
                    <h2>@michellstefanii</h2>

                <p>
                    Developer at <a href="http://empralpiracicaba.com.br">@Empral</a>
                </p>

                <ul>
                    <li>
                        <LocationIcon />
                        São Paulo Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido(a) 3 abril de 1995
                    </li>
                </ul>

                <Followage>
                    <span>
                        seguindo <strong>94</strong>
                    </span>
                    <span>
                        <strong>672 </strong> seguidores
                    </span>
                </Followage>
                </ProfileData>

                <Feed />
        </Container>
  );
}

export default ProfilePage;