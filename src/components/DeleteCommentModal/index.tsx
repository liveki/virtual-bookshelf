import React, { useCallback } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { Button, ToggleModalButton } from './styles';
import { FiTrash2 } from 'react-icons/fi';
import { makeStyles, createStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { Comment } from '../../pages/BookDetail';

import * as commentActions from '../../store/ducks/comments/actions';

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
    modalContentText: {
      font: '300 1.8rem Roboto',
    },
  })
);

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
