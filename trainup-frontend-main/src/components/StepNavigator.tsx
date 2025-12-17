import { Feather, Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';

interface StepNavigatorProps {
  onPrev?: () => void;
  onCheck?: () => void;
  onNext?: () => void;
}

export default function StepNavigator({ onPrev, onCheck, onNext }: StepNavigatorProps) {
  return (
    <View className='items-center justify-center flex-row gap-10'>
      <TouchableOpacity
        onPress={onPrev}
        className='w-[50px] h-[50px] bg-[#6FAEFF] rounded-full items-center justify-center'
      >
        <Feather name="arrow-left" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onCheck}
        className='w-[70px] h-[70px] bg-[#6FAEFF] rounded-full items-center justify-center'
      >
        <View className='w-[60px] h-[60px] bg-[#3CCF91] rounded-full items-center justify-center'>
          <Ionicons name="checkmark" size={32} color="black" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onNext}
        className='w-[50px] h-[50px] bg-[#6FAEFF] rounded-full items-center justify-center'
      >
        <Feather name="arrow-right" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}