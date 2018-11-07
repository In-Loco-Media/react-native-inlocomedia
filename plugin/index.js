
import { NativeModules } from 'react-native';

const init = (options) => {
	const appId = options.appId || null;
	const enableLogs = options.enableLogs || false;
	const developmentDevices = options.developmentDevices || [];
	NativeModules.RNInLocoMedia.init(appId, enableLogs, developmentDevices);
}

export default {
	init: init
};
