import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { FiTrash2 } from 'react-icons/fi';

import * as commentActions from '../../store/ducks/comments/actions';

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';

import { Button, ToggleModalButton, useStyle } from './styles';

import { Comment } from '../../pages/BookDetail';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface DeleteModalProps {
  value: Comment;
}

const DeleteCommentModal: React.FC<DeleteModalProps> = ({ value }) => {
  const [open, setOpen] = React.useState(false);
  const styles = useStyle();

  const dispatch = useDispatch();

  const handleRemoveComment = useCallback(() => {
    dispatch(commentActions.removeCommentRequest(value));
    setOpen(!open);
  }, [dispatch, value, open]);

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ToggleModalButton onClick={toggleModal}>
        <FiTrash2
          size={24}
          style={{
            marginLeft: '1.3rem',
          }}
        />
      </ToggleModalButton>
      <Dialog
        open={open}
        onClose={toggleModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        TransitionComponent={Transition}
        className={styles.modalContainer}
      >
        <DialogTitle id="alert-dialog-title" className={styles.modalTitle}>
          Confirmação
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            className={styles.modalContentText}
          >
            Deseja apagar este comentário?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleModal}>Cancelar</Button>
          <Button onClick={handleRemoveComment} isDeleteType>
            Apagar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteCommentModal;
