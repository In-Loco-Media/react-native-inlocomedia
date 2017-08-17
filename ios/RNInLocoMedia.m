
#import "RNInLocoMedia.h"
#import <InLocoMediaSDKAds/ILMInLocoMedia.h>

@implementation RNInLocoMedia

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(init:(NSString *)appId withLogsEnabled:(BOOL)logsEnabled andDevelopmentDeviceIds:(NSArray<NSString *> *) deviceIds)
{
    ILMAdsOptions *options = [[ILMAdsOptions alloc] init];
    [options setLogEnabled:logsEnabled];
    [options setDevelopmentDevices:deviceIds];
    [options setAdsKey:appId];
    [ILMInLocoMedia initWithOptions:options];
}

@end
