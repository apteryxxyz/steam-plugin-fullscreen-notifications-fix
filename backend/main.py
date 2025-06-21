# A backend is not needed for this plugin, but Millennium does not respect the useBackend: false flag

import Millennium  # type: ignore

class Plugin:
  def _load(self):
    Millennium.ready()
    pass

  def _front_end_loaded(self):
    pass
  
  def _unload(self):
    pass
