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

export const TopNav = (pageName: string): React.ReactElement => (
	<TopNavigation
		accessoryLeft={MenuAction}
		title={pageName}
		style={styles.topNav}
	/>
);

const styles = StyleSheet.create({
	topNav: {
		width: 360,
		height: 56,
		backgroundColor: "#cfe9e5",
	},
});
