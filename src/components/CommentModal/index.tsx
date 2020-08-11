import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { FiEdit2 } from 'react-icons/fi';

import * as commentActions from '../../store/ducks/comments/actions';
import {
  DialogActions,
  Dialog,
  DialogContent,
  DialogTitle,
  TextareaAutosize,
  Slide,
} from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';

import { Button, ToggleModalButton, useStyle } from './styles';

import { Comment } from '../../pages/BookDetail';

interface CommentModalProps {
  value: Comment;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CommentModal: React.FC<CommentModalProps> = ({ value }) => {
  const styles = useStyle();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState(value);

  const toggleModal = () => {
    setOpen(!open);
  };

  const handleSaveComment = useCallback(() => {
    const { formattedDate, ...updateComment } = value;

    updateComment.body = comment.body;

    dispatch(commentActions.saveCommentRequest(updateComment));

    setOpen(!open);
  }, [comment.body, dispatch, open, value]);

  return (
    <div>
      <ToggleModalButton onClick={toggleModal}>
        <FiEdit2 size={24} />
      </ToggleModalButton>

      <Dialog
        open={open}
        onClose={toggleModal}
        aria-labelledby="form-dialog-title"
        className={styles.modalContainer}
        TransitionComponent={Transition}
      >
        <DialogTitle id="form-dialog-title" className={styles.modalTitle}>
          Comentário
        </DialogTitle>

        <DialogContent>
          <TextareaAutosize
            className={styles.modalTextArea}
            value={comment.body}
            onChange={(e) => setComment({ ...comment, body: e.target.value })}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={toggleModal}>Cancelar</Button>
          <Button onClick={handleSaveComment} isSaveType>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CommentModal;
