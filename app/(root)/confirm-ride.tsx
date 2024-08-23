import { FlatList, View } from "react-native";
import RideLayout from "@/components/RideLayout";
import DriverCard from "@/components/DriverCard";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { useDriverStore } from "@/app/store";

const ConfirmRide = () => {
  const { drivers, selectedDriver, setSelectedDriver } = useDriverStore();
  return (
    <RideLayout title="Choose a Driver" snapPoints={["65%", "85%"]}>
      <FlatList
        data={drivers}
        renderItem={(item) => {
          return (
            <DriverCard
              item={item}
              selected={selectedDriver!}
              setSelected={() => setSelectedDriver(Number(item.item.id!))}
            />
          );
        }}
        ListFooterComponent={() => {
          return (
            <View className="mx-5 mt-10">
              <CustomButton
                title="Select Ride"
                onPress={() => {
                  // @ts-ignore
                  router.push("(root)/book-ride");
                }}
              />
            </View>
          );
        }}
      />
    </RideLayout>
  );
};

export default ConfirmRide;
