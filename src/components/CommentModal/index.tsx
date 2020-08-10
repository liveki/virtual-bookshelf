import React, { useState, useCallback } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';

import { FiEdit2 } from 'react-icons/fi';
import { Button, ToggleModalButton } from './styles';

import { Comment } from '../../pages/BookDetail';
import { makeStyles, createStyles } from '@material-ui/core';

import * as commentActions from '../../store/ducks/comments/actions';
import { useDispatch } from 'react-redux';

interface CommentModalProps {
  value: Comment;
}

const useStyle = makeStyles(() =>
  createStyles({
    modalContainer: {
      '& .MuiDialog-paperWidthSm': {
        width: '50%',
      },
    },
    modalTitle: {
      '& h2': {
        font: '500 1.8rem Roboto',
      },
    },
    modalTextArea: {
      width: '100%',
      resize: 'vertical',
      minHeight: '20.5rem',
      maxHeight: '20.5rem',
      background: '#EFEFEF',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '0.4rem',
      font: '300 1.6rem Roboto',
      paddingLeft: '0.5rem',
      outline: 0,
      paddingTop: '0.3rem',
    },
  })
);

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
  const [body, setBody] = useState(value.body);

  const toggleModal = () => {
    setOpen(!open);
  };

  const handleSaveComment = useCallback(() => {
    const { formattedDate, ...updateComment } = value;

    updateComment.body = body;

    dispatch(commentActions.saveCommentRequest(updateComment));

    setOpen(!open);
  }, [body, dispatch, open, value]);

  return (
    <>
      <ToggleModalButton onClick={toggleModal}>
        <FiEdit2
          size={24}
          style={{
            marginLeft: '1.3rem',
          }}
        />
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
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={toggleModal}>Cancelar</Button>
          <Button onClick={handleSaveComment} isSaveType>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CommentModal;
