import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    handleMembersChange,
    selectPassengerMembers,
    setMembers,
} from "../store/passengerSlice";
import {
    Button,
    Stack,
    IconButton,
    Divider,
    Popover
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const errorStrings = [
    "Sorry, we do not support more than 9 passengers.",
    "You must have at least one adult per infant on lap.",
    "You must have at least one adult per two infants.",
];

const membersList = [
    { title: "Adults", desc: "", short: "adu", min: 1, max: 9 },
    { title: "Children", desc: "Aged 2-11", short: "chi", min: 0, max: 9 },
    { title: "Infants", desc: "In seat", short: "ifs", min: 0, max: 9 },
    { title: "Infants", desc: "On lap", short: "ifl", min: 0, max: 9 },
];

let initMembers = null;

function PassengerSelector() {
    const members = useSelector(selectPassengerMembers);
    const dispatch = useDispatch();
    const [total, setTotal] = React.useState(1);
    const [error, setError] = React.useState(-1);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    React.useEffect(() => {
        setError(() => {
            let total = 0;
            let totalInfants = 0;
            for (let key in members) {
                total += members[key];
                if (key === "ifs" || key === "ifl")
                    totalInfants += members[key];
            }
            if (total > 9) return 0;
            if (members.ifl > members.adu) return 1;
            if (totalInfants > members.adu * 2) return 2;
            return -1;
        });
    }, [members]);
    React.useEffect(() => {
        if (open) {
            initMembers = { ...members };
        } else if (initMembers) {
            dispatch(setMembers(initMembers));
        }
    }, [open]);
    const handleMembersClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleDoneClick = () => {
        initMembers = { ...members };
        setTotal(() => {
            let totalTemp = 0;
            for (let key in members) {
                totalTemp += members[key];
            }
            return totalTemp;
        });
        handleClose();
    };
    const membersSelectBtnClasses =
        "box-border relative inline-flex items-center text-base rounded cursor-text border-solid border-[1px] border-gray-400 hover:border-black min-h-[60px]";

    return (
        <>
            <div className="inline-flex flex-col relative align-top border-0 p-0 min-w-[130px] ml-8">
                <div
                    className={
                        membersSelectBtnClasses +
                        (open ? " border-[#1976d2] border-2" : "")
                    }
                    onClick={handleMembersClick}
                >
                    <div className="relative text-gray-500 text-ellipsis whitespace-nowrap overflow-hidden min-h-[1.5rem] select-none rounded cursor-pointer border-0 box-content m-0 block min-w-0 w-full animate-[mui-auto-fill-cancel] px-3.5 py-4 pr-[32px]">
                        <PersonOutlineIcon className="absolute left-2" />
                        <div className="absolute left-0 w-full text-center">
                            <span className="text-base text-gray-500">{total}</span>
                        </div>
                        <ArrowDropDownIcon
                            className={
                                open
                                    ? "right-2 absolute rotate-180"
                                    : "right-2 absolute"
                            }
                        />
                    </div>
                </div>
            </div>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                className="w-[250] max-w-xs"
            >
                <Stack
                    px={2}
                    py={1}
                    direction="column"
                    spacing={1}
                    divider={<Divider flexItem />}
                >
                    {membersList.map((item, index) => (
                        <div className="flex items-center" key={index}>
                            <div className="w-1/2">
                                <div className="font-medium text-gray-900 text-md">
                                    {item.title}
                                </div>
                                <div className="text-sm font-normal">
                                    <span>{item.desc}</span>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <Stack direction="row" spacing={1}>
                                    <IconButton
                                        aria-label="add"
                                        color="primary"
                                        disabled={
                                            members[item.short] <= item.min
                                        }
                                        onClick={() =>
                                            dispatch(
                                                handleMembersChange({
                                                    key: item.short,
                                                    inc: false,
                                                })
                                            )
                                        }
                                    >
                                        <RemoveIcon />
                                    </IconButton>
                                    <div className="w-10 py-2 font-medium text-center text-gray-900 text-md">
                                        {members[item.short]}
                                    </div>
                                    <IconButton
                                        aria-label="remove"
                                        color="primary"
                                        disabled={
                                            members[item.short] >= item.max
                                        }
                                        onClick={() => {
                                            dispatch(
                                                handleMembersChange({
                                                    key: item.short,
                                                    inc: true,
                                                })
                                            );
                                        }}
                                    >
                                        <AddIcon />
                                    </IconButton>
                                </Stack>
                            </div>
                        </div>
                    ))}
                    {error !== -1 && (
                        <div className="text-xs text-red-600 font">
                            {errorStrings[error]}
                        </div>
                    )}
                    {error === -1 && (
                        <Button
                            variant="outlined"
                            size="large"
                            onClick={handleDoneClick}
                        >
                            Done
                        </Button>
                    )}
                </Stack>
            </Popover>
        </>
    );
}

export default PassengerSelector;
