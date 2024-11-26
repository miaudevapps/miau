import {
	Icon,
	IconElement,
	IconProps,
	TopNavigation,
	TopNavigationAction,
} from "@ui-kitten/components";
import { StyleSheet } from "react-native";

const MenuIcon = (props: IconProps): IconElement => (
	<Icon {...props} name="menu-outline" />
);

const MenuAction = (): React.ReactElement => (
	<TopNavigationAction icon={MenuIcon} />
);

export const TopNav = (pageName: string, color: string): React.ReactElement => (
	<TopNavigation
		accessoryLeft={MenuAction}
		title={pageName}
		style={{ backgroundColor: color, width: "100%", height: 56 }}
	/>
);

const styles = StyleSheet.create({
	topNav: {
		width: "100%",
		height: 56,
		backgroundColor: "#cfe9e5",
	},
});
