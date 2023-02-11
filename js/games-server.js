var hasInstalled = false;

navigator.serviceWorker.register()
  .then((reg) => {
    if (!hasInstalled) {
      window.location.reload();
    }
  }).catch(e => {
    alert(e);
    console.log(`${origin}sw.js?instancepath=${instance}`);
    throw new Error(e);
  })


navigator.serviceWorker.getRegistrations()
  .then((registrations) => {
    for (let registration of registrations) {
      if (registration.active.scriptURL == `${location.origin}/sw.js`) {
        hasInstalled = true;
      }
    }
  });