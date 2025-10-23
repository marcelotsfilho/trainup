import AdditionalData from '@/src/components/AdditionalData';
import ProfileHeader from '@/src/components/ProfileHeader';
import RegistrationData from '@/src/components/RegistrationData';
import { View } from 'react-native';

export default function Profile(){
    return(
        <View>
            <ProfileHeader title='Nome do Aluno'/>
            <View className="">
                <RegistrationData title='Dados Cadastrais'/>
                <AdditionalData title='Dados Adicionais'/>
            </View>
        </View>
    )
}