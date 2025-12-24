// app/_layout.tsx
import { Slot } from 'expo-router';

// 복잡한 설정 다 버리고, 단순히 index.tsx를 보여주도록 설정합니다.
export default function RootLayout() {
    return <Slot />;
}
