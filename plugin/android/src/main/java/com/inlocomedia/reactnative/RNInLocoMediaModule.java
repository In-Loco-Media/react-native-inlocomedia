package com.inlocomedia.reactnative;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.inlocomedia.android.ads.InLocoMedia;
import com.inlocomedia.android.ads.InLocoMediaOptions;

public class RNInLocoMediaModule extends ReactContextBaseJavaModule {

    private final static String REACT_CLASS = "RNInLocoMedia";

    private final ReactApplicationContext reactContext;

    public RNInLocoMediaModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @ReactMethod
    public void init(final String appId, final boolean logsEnabled, final ReadableArray developmentDeviceIds) {

        InLocoMediaOptions options = InLocoMediaOptions.getInstance(reactContext);

        options.setAdsKey(appId);
        options.setLogEnabled(logsEnabled);
        options.setDevelopmentDevices(developmentDeviceIds.toArrayList().toArray(new String[developmentDeviceIds.size()]));

        InLocoMedia.init(reactContext, options);
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }
}