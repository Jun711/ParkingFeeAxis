package com.jungoh;
import android.os.Bundle;
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;
import com.google.android.gms.ads.MobileAds;

public class MainActivity extends ReactActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this, true);  // here
        super.onCreate(savedInstanceState);

        MobileAds.initialize(this, "ca-app-pub-6805425741453021~7240173305");
    }
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "Axis";
    }
}
