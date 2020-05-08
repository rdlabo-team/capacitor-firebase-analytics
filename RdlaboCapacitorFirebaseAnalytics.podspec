
  Pod::Spec.new do |s|
    s.name = 'RdlaboCapacitorFirebaseAnalytics'
    s.version = '0.0.1'
    s.summary = 'Facebook Login plugin for Capacitor'
    s.license = 'MIT'
    s.homepage = 'git@github.com:rdlabo-team/capacitor-firebase-analytics.git'
    s.author = 'Masahiko Sakakibara'
    s.source = { :git => 'git@github.com:rdlabo-team/capacitor-firebase-analytics.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
    s.dependency 'FirebaseCore'
    s.dependency 'FirebaseAnalytics'
    s.static_framework = true
  end
