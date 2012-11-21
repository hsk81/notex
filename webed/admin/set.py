__author__ = 'hsk81'

###############################################################################
###############################################################################

from flask.ext.admin.contrib.sqlamodel import ModelView
from flask.ext.login import current_user

from webed.ext import db, admin
from webed.models import Set

###############################################################################
###############################################################################

class SetAdmin (ModelView):

    list_columns = ('base', 'root', 'uuid', 'mime', 'name')
    searchable_columns = (Set.uuid, Set.mime, Set.name)
    column_filters = (Set.uuid, Set.mime, Set.name)

    def __init__ (self, session):
        super (SetAdmin, self).__init__ (Set, session)

    def is_accessible(self):
        return current_user.is_authenticated ()

admin.add_view (SetAdmin (db.session))

###############################################################################
###############################################################################