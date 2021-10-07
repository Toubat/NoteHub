const express = require("express");
const {
  httpInsertNote,
  httpSelectUserNotes,
  httpTransferOwnership,
  httpSelectAllAccessorsByNoteId,
  httpSelectNoteByNoteId,
  httpAlterNoteCommunity,
  httpAlterNoteCategories,
  httpAlterNoteAccess,
  httpSelectNoteAccessByNoteIdAndUserId,
  httpSelectAllCategories
  httpUpdateNoteByNoteId
} = require("./note.controller");

const noteRouter = express.Router();

noteRouter.post("/insert-note", httpInsertNote);

noteRouter.get("/get-user-notes", httpSelectUserNotes);

noteRouter.post("/transfer-note-ownership", httpTransferOwnership);

noteRouter.post("/get-all-accessors", httpSelectAllAccessorsByNoteId);

noteRouter.post("/get-note-by-noteId", httpSelectNoteByNoteId);

noteRouter.post("/alter-note-community", httpAlterNoteCommunity);

noteRouter.post("/alter-note-categories", httpAlterNoteCategories);

noteRouter.post("/alter-note-access", httpAlterNoteAccess);

noteRouter.post("/get-note-access-by-noteId-userId", httpSelectNoteAccessByNoteIdAndUserId);

noteRouter.get("/get-all-categories", httpSelectAllCategories);

noteRouter.post("/update-note", httpUpdateNoteByNoteId)
module.exports = noteRouter;